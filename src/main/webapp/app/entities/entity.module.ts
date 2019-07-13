import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'book',
        loadChildren: './book/book.module#BlogBookModule'
      },
      {
        path: 'reader',
        loadChildren: './reader/reader.module#BlogReaderModule'
      },
      {
        path: 'room',
        loadChildren: './room/room.module#BlogRoomModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogEntityModule {}
