// 接收消息
self.addEventListener('message', function(e) {
  console.log(e);
  var data = e.data;
  switch(data.cmd) {
    case 'start':
      self.postMessage('WORKERSTARTED:' + data.msg);
      break;
    case 'stop':
      self.postMessage('WORKER STOPED' + data.msg);
      break;
  }
})