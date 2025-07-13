yum install socat
socat TCP4-LISTEN:8080,fork,su=nobody TCP4:192.168.49.2: <loadbalancerport>