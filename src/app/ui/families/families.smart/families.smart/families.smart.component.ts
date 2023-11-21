import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FamiliesService } from 'src/app/data_access/families/families.service';
import { Child, ChildCreated } from 'src/app/models/children.model';
import { Family } from 'src/app/models/family.model';


@Component({
  selector: 'app-families.smart',
  templateUrl: './families.smart.component.html',
  styleUrls: ['./families.smart.component.scss']
})
export class FamiliesSmartComponent implements OnInit {


  familyId: number = 0;
  family: Family | null = null;
  children! : Child[] ;
  displayDialog: boolean = false;

  private familyService = inject(FamiliesService);
  private route = inject(ActivatedRoute);

  constructor(private familiesService: FamiliesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const familyId = params.get('familyId');
      this.familyId = +familyId!;
      if (familyId) {
        this.familyService
          .getFamilyById(+familyId)
          .subscribe((family) => {
            this.family = family;
            this.children = family.children;
            console.log( "la famille choisit est : "+ family);
          });
      } else {
        console.error('Family ID is null');
      }
    });
}

showDialog() {
  this.displayDialog = true;
}

onReceiveChildrenFromChild(childrenReceived: ChildCreated) {
  const newChild: Child = {
    username: childrenReceived.username,
    birthday: childrenReceived.birthday,
    gender: childrenReceived.gender,
    id: this.familyId
  };
  this.children.push(newChild);
  throw new Error('Method not implemented.');
  }
}































  // onSubmit(childData: ChildrenEntity) {
  //   this.activitiesService.createChildren(childData).subscribe({
  //     next: (response) => {
  //       console.log('Enfant créé avec succès', response);
  //       // Gérer la réponse ici
  //     },
  //     error: (error) => {
  //       console.error('Erreur lors de la création de l\'enfant', error);
  //       // Gérer l'erreur ici
  //     }
  //   });
  // }

  // ...

