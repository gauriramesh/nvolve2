export function addEvent(rsoName, event) {
  const storedEvents = getEvents(rsoName);
  if (storedEvents) {
    storedEvents.push(event);
    localStorage.setItem("events:" + rsoName, JSON.stringify(storedEvents));
  }
  localStorage.setItem("events:" + JSON.stringify([event]));
}

export function getEvents(rsoName) {
  const json = localStorage.getItem("events:" + rsoName);
  if (!json) return [];
  const parsed = JSON.parse(json);
  parsed.forEach((v, i, arr) => {
    arr[i] = Object.assign(new Event(), v);
  });
  return parsed;
}

export class Event {
  constructor() {
    this.name = "";
    this.privateDescription = "";
    this.publicDescription = "";
    this.numParticipants = "";
    this.repeatCycle = eventRepeatOptions.DoesNotRepeat;
    this.date = undefined;
    this.startTime = "";
    this.endTime = "";
    this.locations = [];
    this.supplements = [];
  }

  addLocation(location) {
    this.locations.push(location);
  }

  addSupplement(supplement) {
    this.supplements.push(supplement);
  }
}

export const eventRepeatOptions = {
  DoesNotRepeat: 0,
  Daily: 1,
  Weekly: 2,
  Monthly: 3,
  Annually: 4,
  Weekdays: 5
};

export class OnCampusEventLocation {
  constructor(location) {
    this.location = location;
    this.studentsOnlyRuleAcknowledged = false;
  }
}

export class OffCampusEventLocation {
  constructor(location) {
    this.location = location;
  }
}

export class TravelInsuranceSupplement {
  constructor(drivers, riders) {
    this.drivers = drivers;
    this.riders = riders;
  }
}

export class SofsSupplement {
  constructor(budgetDescription) {
    this.budgetDescription = budgetDescription;
  }
}

export const PossibleEventLocations = [
  { label: "Avery 100", value: "Avery 100" },
  { label: "Avery 101", value: "Avery 101" },
  { label: "Avery 102", value: "Avery 102" },
  { label: "Avery 103", value: "Avery 103" },
  { label: "Avery 104", value: "Avery 104" },
  { label: "Avery 105", value: "Avery 105" },
  { label: "Avery 106", value: "Avery 106" },
  { label: "Avery 200", value: "Avery 200" },
  { label: "Avery 201", value: "Avery 201" },
  { label: "Avery 212", value: "Avery 212" },
  { label: "Avery 213", value: "Avery 213" },
  { label: "Avery 214", value: "Avery 214" },
  { label: "Avery 215", value: "Avery 215" },
  { label: "Avery 216", value: "Avery 216" },
  { label: "Gaughan 100", value: "Gaughan 100" },
  { label: "Gaughan 101", value: "Gaughan 101" },
  { label: "Gaughan 102", value: "Gaughan 102" },
  { label: "Gaughan 103", value: "Gaughan 103" },
  { label: "Gaughan 104", value: "Gaughan 104" },
  { label: "Gaughan 105", value: "Gaughan 105" },
  { label: "Gaughan 106", value: "Gaughan 106" },
  { label: "Gaughan 200", value: "Gaughan 200" },
  { label: "Gaughan 201", value: "Gaughan 201" },
  { label: "Gaughan 212", value: "Gaughan 212" },
  { label: "Gaughan 213", value: "Gaughan 213" },
  { label: "Gaughan 214", value: "Gaughan 214" },
  { label: "Gaughan 215", value: "Gaughan 215" },
  { label: "Gaughan 216", value: "Gaughan 216" },
  { label: "Kauffman 110", value: "Kauffman 110" },
  { label: "Kauffman 112", value: "Kauffman 112" },
  { label: "Kauffman 102", value: "Kauffman 102" },
  { label: "Kauffman 127A", value: "Kauffman 127A" },
  { label: "Kauffman 127B", value: "Kauffman 127B" },
  { label: "Kauffman 137", value: "Kauffman 137" }
];
