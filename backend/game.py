#players submit actions from discrete set, can be parameterized with a card from stack,
#runs turn handler 
#score is cumulative
#Piles
class Suit:
    suit = "S"

class Rank:
    rank = "A"

class Card:
    suit : Suit = None
    rank : Rank = None

class Pile:
    faceUp : bool = True
    cards : list[Card] = []

class Player:
    hand : list[Card] = []
    #can set more fields dynamically

class Game:
    piles : dict[str, Pile] = {}
    def setup():
        pass
