
class Character {

  protected name: string;
  protected level: number;
  protected hp: number;


  constructor(name: string, level: number, hp: number) {
    this.name = name;
    this.level = level;
    this.hp = hp;
  }

  public getName(): string { return this.name }
  public getLevel(): number { return this.level }
  public getHp(): number { return this.hp }

  public setName(name: string) { this.name = name; }
  public setLevel(level: number) { this.level = level; }
  public setHp(hp: number) { this.hp = hp; }


  public attack = () => {
    console.log("Estoy atacando!")
  }

  public defend = () => {
    console.log("Estoy defendiendo!");

  }

}
