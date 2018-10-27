/*
async getHeroes(): Promise<Hero[]> {
    try {
      let response = await this.http
        .get(this.heroesUrl)
        .toPromise();
      return response.json().data as Hero[];
    } catch (error) {
      await this.handleError(error);
    }
  }


  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 2000))
    .then(() => this.getHeroes());
}

We are creating a new promise ourselves here. We could await it directly:

async getHeroesSlowly(): Promise<Hero[]> {
  await new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 2000));
  return await this.getHeroes();
}

Instead we will wrap the promise creation into a new method to make it reusable elsewhere:

private delay(ms: number)>: Promise<void> {
  return new Promise<void>(resolve =>
    setTimeout(resolve, ms));
}

Since we are only returning a Promise from the method and not waiting for any promises to resolve, the method can be synchronous. Now, we can call it from getHeroesSlowly() and make it more readable:

async getHeroesSlowly(): Promise<Hero[]> {
  await this.delay(2000);
  return await this.getHeroes();
}
The remaining service methods are quite similar, therefore I'll just list them here already converted for the sake of completeness:

async getHero(id: number): Promise<Hero> {
  let heroes = await this.getHeroes();
  return heroes.find(hero => hero.id === id);
}

async update(hero: Hero): Promise<Hero> {
  try {
    const url = `${this.heroesUrl}/${hero.id}`;
    await this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise();
    return hero;
  } catch (error) {
    await this.handleError(error);
  }
}

async create(name: string): Promise<Hero> {
  try {
    let res = await this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise();
    return res.json().data;
  } catch (error) {
    await this.handleError(error);
  }
}

async delete(id: number): Promise<void> {
  try {
    const url = `${this.heroesUrl}/${id}`;
    await this.http.delete(url, {headers: this.headers})
      .toPromise();
  } catch (error) {
    await this.handleError(error);
  }
}
Since the asynchronous functions return promises just like their synchronous counterparts did, we could stop here without making any changes to service consumers, allowing us to gradually transition from synchronous to asynchronous approach.

We won't stop here, of course. Rather, we'll continue with DashboardComponent.ngOnInit(). This is its code before the change:

ngOnInit(): void {
  this.heroService.getHeroes()
   .then(heroes => this.heroes = heroes.slice(1, 5));
}
An asynchronous function must return a promise, even if didn't before the change. In our case, we'll change the return value to Promise<void>:

async ngOnInit(): Promise<void> {
  let heroes = await this.heroService.getHeroes();
  this.heroes = heroes.slice(1, 5);
}
We'll make similar changes to functions in HeroesComponent:

async getHeroes(): Promise<void> {
  let heroes = await this.heroService.getHeroesSlowly();
  this.heroes = heroes;
}

async add(name: string): Promise<void> {
  name = name.trim();
  if (!name) { return; }
  let hero = await this.heroService.create(name);
  this.heroes.push(hero);
  this.selectedHero = null;
}

async delete(hero: Hero): Promise<void> {
  await this.heroService.delete(hero.id);
  this.heroes = this.heroes.filter(h => h !== hero);
  if (this.selectedHero === hero) { this.selectedHero = null; }
}
And HeroDetailComponent as well:

async save(): Promise<void> {
  await this.heroService.update(this.hero);
  this.goBack();
}

  */