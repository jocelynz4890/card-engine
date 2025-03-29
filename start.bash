# python3 -m flask run --host=0.0.0.0

#!/bin/bash
export FLASK_APP=backend/__init__
export FLASK_ENV=production
flask run --host=0.0.0.0 --port=$PORT