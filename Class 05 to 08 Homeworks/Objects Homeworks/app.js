console.log(`working`);

// PART 1

const animal = {
  name: `Rex`,
  kind: `Huskey`,
  speak: function (message) {
    console.log(
      `${this.name} is little ${this.kind} and wants to say ${message}.`
    );
  },
};

animal.speak(`hello people`);

console.log(`-----------------------------------------------------`);

// PART 2

const book = {
  title: `Steve Jobs`,
  author: `Walter Isaacson`,
  read: true,
  readingStatus: function () {
    if (this.read === true) {
      console.log(`Alredy read ${this.title} by ${this.author}.`);
    } else if (this.read === false) {
      console.log(`You still need to read ${this.title} by ${this.author}.`);
    }
  },
};

book.readingStatus();
