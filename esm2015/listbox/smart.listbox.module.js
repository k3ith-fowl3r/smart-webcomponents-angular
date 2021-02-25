import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ListBoxComponent } from './smart.listbox';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListItemComponent } from './smart.listitem';
import { ListItemsGroupComponent } from './smart.listitemsgroup';
let ListBoxModule = class ListBoxModule {
};
ListBoxModule = tslib_1.__decorate([
    NgModule({
        declarations: [ListBoxComponent, ListItemComponent, ListItemsGroupComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [ListBoxComponent, ListItemComponent, ListItemsGroupComponent]
    })
], ListBoxModule);
export { ListBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQubGlzdGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWFydC13ZWJjb21wb25lbnRzLWFuZ3VsYXIvbGlzdGJveC8iLCJzb3VyY2VzIjpbInNtYXJ0Lmxpc3Rib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVFqRSxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0NBQUksQ0FBQTtBQUFqQixhQUFhO0lBTnpCLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO1FBQy9FLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO0tBQ3ZFLENBQUM7R0FFVyxhQUFhLENBQUk7U0FBakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExpc3RCb3hDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0Lmxpc3Rib3gnO1xuaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5saXN0aXRlbSc7XG5pbXBvcnQgeyBMaXN0SXRlbXNHcm91cENvbXBvbmVudCB9IGZyb20gJy4vc21hcnQubGlzdGl0ZW1zZ3JvdXAnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0xpc3RCb3hDb21wb25lbnQsIExpc3RJdGVtQ29tcG9uZW50LCBMaXN0SXRlbXNHcm91cENvbXBvbmVudF0sXG5cdHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcblx0ZXhwb3J0czogW0xpc3RCb3hDb21wb25lbnQsIExpc3RJdGVtQ29tcG9uZW50LCBMaXN0SXRlbXNHcm91cENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Qm94TW9kdWxlIHsgfVxuIl19