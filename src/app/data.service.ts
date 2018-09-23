import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/*
There is a new, recommended, way to register a provider, 
directly inside the @Injectable() decorator, using the new providedIn attribute.
It accepts 'root' as a value or any module of your
application. When you use 'root', your injectable will be registered as
a singleton in the application, and you don't need to add it to
thie providers of the root module. Similarly, if you use 
providedIn: UsersModule, the injectable is registered as a
provider of the UsersModule without adding it to the providers
of the module
*/

/*
Sounds like its a new shortcut way of specifying where
the service should be provided. I would prefer looking
at a module's provider list to see all the services
that are declared as a providers, rather than scattered code base
for providedIn tags
*/

/*
Apparently using providedIn allows the services to be lazy-loaded
by the app. To test this, put console logs in your service.
Apparently someone mentioned that their home page used to
load 16 services, now it loads 9. THis is a interesting feature.
*/

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
