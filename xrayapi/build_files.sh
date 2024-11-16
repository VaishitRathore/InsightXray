#!/bin/bash

echo "BUILD START"

# Install backend dependencies
pip install -r requirements.txt

# Run Django migrations (optional)
python3.9 manage.py migrate

# Collect static files
python3.9 manage.py collectstatic --noinput --clear

# Navigate to the frontend directory
cd radiologyapp

# Install frontend dependencies
npm install

# Build the frontend
npm run build

echo "BUILD END"
