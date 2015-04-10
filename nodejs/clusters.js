var cluster = require('cluster');
var cpus = require('os').cpus();

if (cluster.isMaster) {
	cpus.forEach(function() {
		cluster.fork();
	});

	cluster.on('listening', function(worker) {
		console.log('Cluster %d conected', worker.process.pid);
	});

	cluster.on('disconnect', function(worker) {
		console.log('Cluster %d disconnected', worker.process.pid);
	});

	cluster.on('exit', function(worker) {
		console.log('Cluster %d falled off', worker.process.pid);
	});
} else {
	require('./app');
}
