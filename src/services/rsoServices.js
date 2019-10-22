export function getRsos() {
  return ["Nebraskans For Cheese", "Scott Frost Appreciation Club"];
}

export function getRsoInfo(rsoName) {
  if (rsoName === "Nebraskans For Cheese") {
    return new Rso(
      "Nebraskans For Cheese",
      "nebraskansforcheese",
      "Treasurer",
      428
    );
  } else if (rsoName === "Scott Frost Appreciation Club") {
    return new Rso(
      "Scott Frost Appreciation Club",
      "scottfrostappreciationclub",
      "President",
      322
    );
  }

  return undefined;
}

export class Rso {
<<<<<<< HEAD
  constructor(name, identifier, role, sofsBalance) {
    this.name = name;
    this.identifier = identifier;
=======
  constructor(name, role, sofsBalance) {
    this.name = name;
>>>>>>> master
    this.role = role;
    this.sofsBalance = sofsBalance;
  }
}
