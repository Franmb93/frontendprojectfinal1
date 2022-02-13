import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

	public id!:number;
    public user!: User;
    public image!: string;
    public userNow!: User;

  constructor(private service: UserService,  private route: ActivatedRoute) {
    this.route.params.subscribe(
			params => {
				this.id = +params['id'];
			}
		);

    this.getUser(this.id);
  }

  ngOnInit(): void {
  }


  getUser(id: number) {
		this.service.getUser(id).subscribe(
			data => {
				this.user = data;

				this.image = `${environment.apiURL}resources/images/${this.user.image}`
			}
		);
	}

    isEqualLoggedThanThisUser() : Boolean{
    if(this.user.username === localStorage.getItem('currentUser')){
      return true;
    } else { return false; }
  }

}
