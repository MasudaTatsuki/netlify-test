build:
	docker compose build
up :
	docker compose up -d
serve:
	make up
	docker compose exec hugo hugo server -D

#Usage: make new file=post/tech/tips/aaa.md
new:
	make up
	docker compose exec hugo hugo new $(file)
	git clone https://github.com/budparr/gohugo-theme-ananke.git

sh:
	make up
	docker compose exec hugo sh

.PHONY: build up serve new