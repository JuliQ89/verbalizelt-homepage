start:
	docker-compose start verbalizelt

stop: 
	docker-compose stop verbalizelt

logs:
	docker-compose logs verbalizelt

exec:
	docker-compose exec -it verbalizelt sh

attach:
	docker-compose attach verbalizelt