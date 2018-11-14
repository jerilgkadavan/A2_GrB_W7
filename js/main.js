(() => {

  // VARIABLES

  const vm = new Vue({
    el: '#app',

    data: {
      carModel: '',
      carDescription: '',
      carPricing: ''
    },

    mounted : function() {
//listen for when Vue is done building itself
console.log('mounted');

this.addPreloader(document.querySelector('.modelInfo'));

//get the data for the first car
document.querySelector("#F55").click();


    },

    updated : function() {
      //listen for when Vue complete its update / render cycle
      console.log('updated');
    },

    methods: {
      addPreloader(parentEL) {
        parentEL.appendChild(document.querySelector('.preloader-wrapper'));
// set up the preloader animation
        bodymovin.loadAnimation({
          wrapper : document.querySelector('.preloader'),
          animType : 'svg',
          loop : true,
          autoplay: true,
          path : './data/search.json'
        });

      },

      getData(e) {

        let targetURL = `./includes/connect.php?carModel=${e.currentTarget.id}`;

        fetch(targetURL) // go get the data and bring it back
          .then(res => res.json()) // turn the result into a plain JS object
          .then(data => {
            console.log(data);
            //run a function to parse our data
            this.showCarData(data[0]); // run a function to put the data on the page
          }) // let's see what we got
          .catch(function (error) {
            console.log(error); // if anything broke, log it to the console
          });
      },

      showCarData(data) {
        this.carModel = data.model;
        this.carDescription = data.modelDetails;
        this.carPricing = data.pricing;
        console.log(data)
      }

    }
  });

  // FUNCTIONS
  // function getData() {
  //   let targetURL = "./includes/connect.php?modelNo=R58";

  //   fetch(targetURL) // go get the data and bring it back
  //     .then(res => res.json()) // turn the result into a plain JS object
  //     .then(data => {
  //       console.log(data);
  //       //run a function to parse our data
  //       showCarData(data[0]); // run a function to put the data on the page
  //     }) // let's see what we got
  //     .catch(function (error) {
  //       console.log(error); // if anything broke, log it to the console
  //     });
  // }
  // function showCarData(data) {
  //   //debugger;
  //   //parse the db info and put it where it needs to go
  //   const { modelName, pricing, modelDetails } = data; // destructuring assignment => MDN JS destructuring

  //   document.querySelector(".modelName").textContent = modelName;
  //   document.querySelector(".priceInfo").textContent = `$ ${pricing}.00`;
  //   document.querySelector(".modelDetails").textContent = modelDetails;
  // }

  // EVENTS
  //getData(); // trigger the getData function

})();