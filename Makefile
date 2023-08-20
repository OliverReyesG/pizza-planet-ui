.ONESHELL:

.DEFAULT_GOAL := build

DOCKER_USER = oliverreyes
APP_NAME = pizza-planet-frontend
TAG = latest


.PHONY: build
build:
	docker build -t $(DOCKER_USER)/$(APP_NAME):$(TAG) .	
