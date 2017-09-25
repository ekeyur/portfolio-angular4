import {trigger, stagger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'center', width:'100%' })
      , { optional: true }),
    query('.block', style({ opacity: 0 })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('1s', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('1s', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ]),
    query(':enter .block', stagger(500, [
      style({ transform: 'translateY(-100px)' }),
      animate('600ms', style({ transform: 'translateY(100px)', opacity: 1 })),
    ]), { optional: true }),
  ])
])