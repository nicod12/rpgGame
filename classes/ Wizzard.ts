
class Wizzard extends Character {
  private skillPower: number;

  constructor(name: string, level: number, hp: number, skillPower: number) {
    super(name, level, hp);
    this.skillPower = skillPower;
  }

  public getSkillPower(): number {
    return this.skillPower;
  }

  public setSkillPower(skillPower: number) {
    this.skillPower = skillPower;
  }

  public castSpell() {
    console.log(`${this.getName()} lanzo un hechizo con poder magico de ${this.getSkillPower()}`);

  }

}
