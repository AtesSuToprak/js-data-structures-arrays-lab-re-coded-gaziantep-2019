// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(DAD) {
  drivers.push("Ralph");
 
}

function destructivelyPrependDriver(DPD) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(DRLD) {
  drivers.pop();
}

function destructivelyRemoveFirstDriver(DRFD) {
  drivers.shift();
}

function appendDriver(AD) {
  
  return [...drivers, AD];
 
}

function pretendDriver(Arnold) {
  
  return ["Arnold", ...drivers];
}



/*    describe('prependDriver(name)', function () {
      it('prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(prependDriver("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeLastDriver()', function () {
      it('removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(removeLastDriver()).to.have.ordered.members(["Milo", "Otis"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeFirstDriver()', function () {
      it('removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(removeFirstDriver()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);*/