## Tests and results

### Puma
```
$ puma -t 16 -w 4
$wrk -t12 -c1000 -d60s http://127.0.0.1:9292

Running 1m test @ http://127.0.0.1:9292
  12 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    11.69ms   11.73ms 205.80ms   82.18%
    Req/Sec     1.08k     0.90k    3.35k    71.50%
  323094 requests in 1.00m, 59.47MB read
Requests/sec:   5376.79
Transfer/sec:      0.99MB
```

### Unicorn
```
$ unicorn -c unicorn.rb
$ wrk -t12 -c1000 -d60s http://127.0.0.1:8080

Running 1m test @ http://127.0.0.1:8080
  12 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   108.06ms  179.85ms   1.98s    95.33%
    Req/Sec   137.87    186.49     1.49k    89.74%
  31852 requests in 1.00m, 8.05MB read
  Socket errors: connect 614, read 753, write 0, timeout 508
Requests/sec:    530.02
Transfer/sec:    137.16KB
```

### Node single core
```
$ nodejs app.js
$ wrk -t12 -c1000 -d60s http://127.0.0.1:8081

Running 1m test @ http://127.0.0.1:8081
  12 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   175.10ms   41.06ms   1.16s    93.88%
    Req/Sec   470.57    277.98     2.30k    63.12%
  336415 requests in 1.00m, 47.20MB read
  Socket errors: connect 0, read 0, write 0, timeout 32
Requests/sec:   5603.51
Transfer/sec:    805.14KB
```

### Node multicore
```
$ node clusters.js
$ wrk -t12 -c1000 -d60s http://127.0.0.1:8081

Running 1m test @ http://127.0.0.1:8081
  12 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    43.55ms   13.39ms 549.80ms   95.15%
    Req/Sec     1.93k   229.59     2.35k    81.01%
  1382946 requests in 1.00m, 194.01MB read
Requests/sec:  23010.65
Transfer/sec:      3.23MB
```

### Go
```
$ go run server.go
$ wrk -t12 -c1000 -d60s http://127.0.0.1:8080

Running 1m test @ http://127.0.0.1:8080
  12 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    21.32ms   18.35ms 825.18ms   98.47%
    Req/Sec     4.02k     0.94k   15.62k    84.65%
  2846596 requests in 1.00m, 396.35MB read
Requests/sec:  47392.59
Transfer/sec:      6.60MB
```
