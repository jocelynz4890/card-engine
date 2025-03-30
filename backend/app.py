from flask import Flask
from flask_cors import CORS
import os
from flask import request
from dotenv import load_dotenv
import uuid
from openai import OpenAI

cache = {} # str key : json
app = Flask(__name__)
CORS(app)
load_dotenv()
model = OpenAI(base_url="https://api.perplexity.ai")

@app.route("/")
def Home():
    return "Hello this is my dog the backend, active decks are " + str(cache.keys())

@app.route("/generate_deck", methods = ["POST"])
def GenerateDeck():
    '''
    Input (POST):
        JSON with a single "prompt" field containing the unstructured prompt.
    
    Output:
        string
        {"cards" : [{"front": "front of card 1", "back" : "back of card 1"}, {...}, ...], "key" : "asflk5wr34234rsv"}
        key is used in GetDeck to get the same cards again.
    '''
    print(request.get_json())
    userPrompt = request.get_json()["prompt"]
    print(f"user prompt {userPrompt}")
    if len(userPrompt) > 2000:
        raise Exception("Message too long. Please keep prompt under 2000 characters.")
    def queryModel(sysPrompt, userPrompt):
        global model
        response = model.chat.completions.create(
        model="sonar-pro",
        messages=[{"role":"system", "content": sysPrompt},
                  {"role":"user", "content":userPrompt}]
        , max_tokens=30000)
        return response.choices[0].message.content
    sysPrompt = ('You are a flashcard generator. You will generate a JSON array of flashcards of the format [{"front":"front of card 1", "back":"back of card 1"}, {"front":"front of card 2", "back":"back of card 2"}]\n'
                     "For example, if the user asks for 3 flashcards about physics, you will output"
                     '["front":"Newton\'s First Law", "back":"Objects in motion remain in motion, and objects at rest remain at rest.", {"front":"Angular momentum", "back":"The product of angular velocity and moment of inertia."}, {"front":"What is the weight of an object with a mass of 10 kg on Earth, in Newtons?", "back":"98 N"}]\n'
                     "Output nothing except the correctly formatted JSON Array. There should be no braces in your output. "
                     "Again, output only the entire JSON Array and no other text. Make sure the JSON Array has at most 100 elements. "
                     "If the user requests more than 100 elements, limit the number of elements to 100. If the user does not specify their desired number "
                     "of flash cards, output an array of 20 flash cards. The user will give you a topic and/or the number of flash cards to generate. "
                     "You will generate flash cards that will have a variety of good questions to help the user study. "
                     "Give the cards in a random order. "
                     "If the topic is unspecified, pick a random topic and output flash cards relating to it. Again, it's extremely important that the JSON Array follows the above format.")
    cards : str = queryModel(sysPrompt, userPrompt)
    global cache
    key = str(uuid.uuid4()).replace("-","")
    res = '{"cards":' + cards + ', "key":"' + key + '"}'
    cache[key] = res
    return res

@app.route("/get_deck/<key>")
def GetDeck(key):
    '''
    Input (GET):
        key is a previously generated uuid (without hyphens) to retrieve flash cards.
    
    Output:
        Same as GenerateDeck.
    '''
    global cache
    if key in cache:
        return cache[key]
    else:
        raise Exception(f"Key {key} not stored.")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)