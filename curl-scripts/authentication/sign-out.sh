#!/bin/bash

curl "https://hot-sauce-recipe-tracker.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \


echo
