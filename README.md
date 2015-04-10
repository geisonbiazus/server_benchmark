## Staring servers

```
$ cd ruby
$ puma -t 16 -w 4
```

```
$ cd ruby
$ unicorn -c unicorn.rb
```

```
$ cd nodejs
$ nodejs cluster.js
```

```
$ cd go
$ go run server.go
```

## Tests and results

### Puma
```
$ wrk -t100 -c1000 -d60s http://127.0.0.1:9292
Running 1m test @ http://127.0.0.1:9292
  100 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    11.25ms   12.62ms  99.24ms   78.17%
    Req/Sec   713.93    279.93     3.92k    71.19%
  341540 requests in 1.00m, 58.30MB read
  Socket errors: connect 79, read 0, write 0, timeout 0
Requests/sec:   5682.88
Transfer/sec:      0.97MB
```

### Unicorn
```
$ wrk -t100 -c1000 -d60s http://127.0.0.1:8080
Running 1m test @ http://127.0.0.1:8080
  100 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    95.60ms  171.20ms   1.83s    95.87%
    Req/Sec    38.47     35.48   260.00     76.55%
  28611 requests in 1.00m, 6.85MB read
  Socket errors: connect 522, read 799, write 0, timeout 839
Requests/sec:    476.08
Transfer/sec:    116.70KB
```

### Node single core
```
$ wrk -t100 -c1000 -d60s http://127.0.0.1:8081
Running 1m test @ http://127.0.0.1:8081
  100 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   156.18ms   26.27ms 524.29ms   87.05%
    Req/Sec    65.51     30.98   202.00     57.32%
  344567 requests in 1.00m, 43.73MB read
  Socket errors: connect 79, read 0, write 0, timeout 0
Requests/sec:   5733.24
Transfer/sec:    745.15KB
```

### Node multicore
```
$ wrk -t100 -c1000 -d60s http://127.0.0.1:8081
Running 1m test @ http://127.0.0.1:8081
  100 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    48.99ms   11.50ms 204.35ms   82.27%
    Req/Sec   202.81     41.58   303.00     70.96%
  1127833 requests in 1.00m, 143.15MB read
  Socket errors: connect 79, read 0, write 0, timeout 0
Requests/sec:  18765.99
Transfer/sec:      2.38MB
```

### Go no single core
```
$ wrk -t12 -c1000 -d60s http://127.0.0.1:8080
Running 1m test @ http://127.0.0.1:8080
  100 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.13ms    4.84ms 217.01ms   87.46%
    Req/Sec   542.15     90.03     3.12k    91.99%
  3033688 requests in 1.00m, 422.40MB read
  Socket errors: connect 79, read 0, write 0, timeout 0
Requests/sec:  50477.78
Transfer/sec:      7.03MB
```
