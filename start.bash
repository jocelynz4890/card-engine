# python3 -m flask run --host=0.0.0.0

#!/bin/bash
export FLASK_APP=backend/__init__
export FLASK_ENV=production
gunicorn --bind 0.0.0.0:$PORT backend.__init__:app