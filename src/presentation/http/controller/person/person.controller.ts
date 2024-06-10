import { error } from "console";

interface HttpResponse {
  statusCode: number;
  body: unknown;
}

export class PersonController {
  private persons = [
    {
      id: 1,
      name: "alex",
    },
    {
      id: 2,
      name: "juan",
    },
    {
      id: 3,
      name: "felipe",
    },
  ];

  getALl(): HttpResponse {
    if (this.persons.length === 0) {
      return { statusCode: 404, body: { error: "Person not found" } };
    }
    return { statusCode: 200, body: this.persons };
  }

  getById(id: number): HttpResponse {
    if (isNaN(id)) return { statusCode: 400, body: { error: "Bad Request" } };

    const person = this.persons.find((person) => person.id === id);
    if (!person) {
      return { statusCode: 404, body: { error: "Person not found" } };
    }
    return { statusCode: 200, body: person };
  }

  create(person: any): HttpResponse {
    if (!person || Object.keys(person).length === 0) {
      return { statusCode: 500, body: { error: "Internal Error" } };
    }
    const personProperties = Object.keys(person);

    if (!personProperties.includes("name")) {
      return { statusCode: 400, body: { error: "Bad Request" } };
    }

    const newPerson = { id: ++this.persons.length, name: person.name };

    this.persons.push(newPerson);

    return { statusCode: 201, body: newPerson };
  }

  update(id: number, person: any): HttpResponse {
    if (!person || Object.keys(person).length === 0) {
      return { statusCode: 500, body: { error: "Internal Error" } };
    }

    if (isNaN(id)) return { statusCode: 400, body: { error: "Bad Request" } };

    const personProperties = Object.keys(person);

    if (!personProperties.includes("name")) {
      return { statusCode: 400, body: { error: "Bad Request" } };
    }

    const currentPerson = this.persons.find((person) => person.id === id);

    if (!currentPerson) {
      return { statusCode: 404, body: { error: "Person not found" } };
    }

    currentPerson.name = person.name;

    return { statusCode: 200, body: currentPerson };
  }

  delete(id: number): HttpResponse {
    if (isNaN(id)) return { statusCode: 400, body: { error: "Bad Request" } };

    const personIndex = this.persons.findIndex((person) => person.id === id);

    if (personIndex === -1) {
      return { statusCode: 404, body: { error: "Person not found" } };
    }

    const personDeleted = this.persons.splice(personIndex, 1);
 
    return { statusCode: 200, body: personDeleted };
  }

  // getAll = () => this.persons;
}
