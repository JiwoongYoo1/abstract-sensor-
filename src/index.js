class Sensor {
    constructor(name){
        this.name = name     
        this.powerStatus = 'off'  
        this.reportingInterval = 10000 

        
     }
 
  
      turn(onoff){    
         this.onoff = onoff    
         if(this.powerStatus === 'on' && this.onoff === 'on'){
             throw new Error()
         }else if(this.powerStatus === 'on' && this.onoff === 'off'){
            this.powerStatus = 'off'
         }else{
            this.powerStatus = onoff
         }
        
         this.status = 'idle'
        
         
         setTimeout(() => {
             this.status = 'sensingDistance';
         setTimeout(() => {
             this.status = 'reportingData' 
         setTimeout(() => {
             this.status = 'idle'           
           }, 1000);
          }, 500);
         }, this.reportingInterval);
       
         
     }
     
      
}   
    
class IotServer {
    start(sensor){
        this.sensor = sensor
    }
    publish(server){
        const{deviceId, actionId, payload} =server
        this.deviceId = deviceId,
        this.actionId = actionId,
        this.payload = payload

        if(this.actionId === 'CHANGE_REPORTING_INTERVAL' && this.sensor[0].powerStatus === 'on'){
            this.sensor[0].reportingInterval = this.payload
        }
    }
}

module.exports = {
    Sensor,
    IotServer,
};
