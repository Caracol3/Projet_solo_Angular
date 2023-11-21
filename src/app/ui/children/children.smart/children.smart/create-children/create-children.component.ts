import { Component, inject } from '@angular/core';
import { FamiliesService } from 'src/app/data_access/families/families.service';
import { Child } from 'src/app/models/children.model';

@Component({
  selector: 'app-create-children',
  templateUrl: './create-children.component.html',
  styleUrls: ['./create-children.component.scss']
})
export class CreateChildrenComponent {

  child: Child = new Child(0,'titouan', new Date(),'male');

private familyService = inject(FamiliesService);

  createChildren(child: Child){
    this.familyService.createChildren(child).subscribe({
      next: (response) => {
        console.log('Enfant créé avec succès', response);

      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'enfant', error);

      }
    });
    // this.displayDialog = false;
  }
}
