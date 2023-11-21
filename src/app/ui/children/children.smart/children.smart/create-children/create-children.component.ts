import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FamiliesService } from 'src/app/data_access/families/families.service';
import { Child, ChildCreated } from 'src/app/models/children.model';

@Component({
  selector: 'app-create-children',
  templateUrl: './create-children.component.html',
  styleUrls: ['./create-children.component.scss'],
})
export class CreateChildrenComponent {
  @Input()
  familyId!: number;

  @Output()
  dataEmitChildCreated: EventEmitter<ChildCreated> =
    new EventEmitter<ChildCreated>();
  @Output()
  closeDialog: EventEmitter<void> = new EventEmitter<void>();

  child: ChildCreated = new ChildCreated('', new Date(), 'male');

  private familyService = inject(FamiliesService);

  createChildren() {
    this.familyService.createChildren(this.familyId, this.child).subscribe({
      next: (response) => {
        console.log('Enfant créé avec succès', response);
        this.dataEmitChildCreated.emit(this.child);
        this.closeDialog.emit();
      },
      error: (error) => {
        console.error("Erreur lors de la création de l'enfant", error);
      },
    });
  }
}
