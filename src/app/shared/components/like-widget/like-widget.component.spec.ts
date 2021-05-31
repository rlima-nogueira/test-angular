import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";


describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;
  /**
   * Requisição assincrona porque o compileComponents() espera uma promise
   * para retornar o template + ts
   * Qnd o sistema usa o webpack para buildar, é possivel fazer essa requisição
   * sem o ajax, mas se não usar o webpack, essa requisição vai quebrar
  */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;

  });

  it('Should create component', () => {
      expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    //detectChanges dispara os ciclos de vida do angular
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    should trigger (@Output liked) when called`, () => {
      spyOn(component.liked, 'emit');
      fixture.detectChanges();

      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
  });

});
