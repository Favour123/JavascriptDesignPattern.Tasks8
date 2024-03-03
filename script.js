class Telephone{
   constructor(){
      this.phoneNumbers=new Set();
      this.observers=new Set();
   }

   addPhoneNumber(phoneNumber){
      this.phoneNumbers.add(phoneNumber);
     this.notify(phoneNumber);
   }

   RemovePhoneNumber(phoneNumber){
      this.phoneNumbers.delete(phoneNumber);
   }
   
   DialPhoneNumber(phoneNumber){
      this.notify(phoneNumber);
   }

    add(observer){
     this.observers.add(observer);
    }
    remove(observer){
      this.observers.delete(observer);
     }
     notify(phoneNumber){
      for(const observer of this.observers){
            observer.update(phoneNumber);
      }
     }
}
class PhoneObserver{
      update(phoneNumber){
            console.log(`observer updated ${phoneNumber}`);
      }
}
class DialingObserver{
      update(phoneNumber){
            console.log(`Now dialing: ${phoneNumber}`);
      } 
}
const telephone = new Telephone();
const phoneObserver = new PhoneObserver();
const dialingObserver = new DialingObserver();

telephone.add(phoneObserver);
telephone.add(dialingObserver);

telephone.addPhoneNumber("1234567890");
telephone.RemovePhoneNumber("1234567890"); 

// telephone.remove(phoneObserver);

// telephone.RemovePhoneNumber("1234567890");