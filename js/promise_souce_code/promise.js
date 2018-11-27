class Promise {
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallBacks = [];
    this.onRejectedCallBacks = [];

    let resolve = (value) => {
      this.status = 'resolved';
      this.value = value;
      this.onResolvedCallBacks.forEach(fn => fn(this.value))
    }

    let reject = (reason) => {
      this.status = 'rejected';
      this.value = reason;
      this.onRejectedCallBacks.forEach(fn => fn())
    }

    executor(resolve, reject);
  }
  then(onFullfield, onRejected) {
    if (this.status === 'pending') {
      this.onResolvedCallBacks.push(() => {
        onFullfield(this.value);
      });
      this.onRejectedCallBacks.push(() => {
        onRejected
      })
    }
    /* if (this.status === 'resolved') {
      onFullfield(this.value);      
    }
    if (this.status === 'rejected') {
      onRejected(this.value);
    } */
  }
}


module.exports = Promise;