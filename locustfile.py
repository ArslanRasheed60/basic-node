from locust import HttpUser, task, between

class MyTestUser(HttpUser):
    wait_time = between(1, 2)  # seconds between tasks

    @task
    def get_hello(self):
        self.client.get("/api/hello")

    @task
    def get_status(self):
        self.client.get("/api/status")

    @task
    def post_submit(self):
        self.client.post("/api/submit", json={"data": "test"})

    @task
    def post_delayed_3s(self):
        self.client.post("/api/delayed-3s", json={"dummy": "waiting"})

    @task
    def post_delayed_6s(self):
        self.client.post("/api/delayed-6s", json={"dummy": "waiting"})
