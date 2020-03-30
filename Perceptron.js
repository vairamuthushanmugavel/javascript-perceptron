class Perceptron{
  constructor(inputCount,learningRate){
     //initializing the weights
     this.weights = [];
     this.learningRate = learningRate;
     this.bias = 1
    for(let i =0; i < inputCount; i++){
      this.weights[i] = Math.random() > 0.5 ? 1 : -1;
    }

  }
  //feed fowarding the input
  feedForward(inputs){
    let guess = 0;
    for(let i = 0 ; i<inputs.length;i++){
       guess += this.weights[i]*inputs[i]
    }
   return this.activation(guess)
  }
  //training the data
  train(inputs,target){
    let guess =  this.feedForward(inputs)
    let error = target -  guess;
    //applying the derivative function for error function
     for(let i = 0 ; i <  inputs.length ; i++){
       //value that should be changed
       let dw = error * inputs[i] * this.learningRate
       this.weights[i] += dw;
     }

  }
  //activation function
  activation(value){
    return value >= 0 ? 1 : -1
  }

}