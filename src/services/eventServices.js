export function addEvent(rsoName, event) {
    const storedEvents = getEvents(rsoName);
    if (storedEvents) {
        storedEvents.push(event);
        localStorage.setItem('events:' + rsoName, JSON.stringify(storedEvents));
    }
    localStorage.setItem('events:' + JSON.stringify([event]));
}

export function getEvents(rsoName) {
    const json = localStorage.getItem('events:' + rsoName);
    if (!json) return [];
    const parsed = JSON.parse(json);
    parsed.forEach((v, i, arr) => {
        arr[i] = Object.assign(new Event(), v);
    });
    return parsed;
}

export class Event {
    constructor() {
        this.name = '';
        this.privateDescription = '';
        this.publicDescription = '';
        this.numParticipants = '';
        this.repeatCycle = eventRepeatOptions.DoesNotRepeat;
        this.date = '';
        this.startTime = '';
        this.endTime = '';
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
}

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
