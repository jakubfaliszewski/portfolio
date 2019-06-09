import { trigger, transition, style, query, animateChild, group, animate, } from '@angular/animations';



export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideInAnimation('left')),
    transition('* => isRight', slideInAnimation('right')),
    transition('isRight => *', slideInAnimation('left')),
    transition('isLeft => *', slideInAnimation('right'))
  ]);

function slideInAnimation(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100vw',
        zIndex: -1
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%', position: 'fixed' })
    ]),
    group([
      query(':leave', [
        animate('1000ms cubic-bezier(0.65, 0.05, 0.29, 1.03)', style({ [direction]: '100%' }))
      ], optional),
      query(':enter', [
        animate('1000ms cubic-bezier(0.65, 0.05, 0.29, 1.03)', style({ [direction]: '0%' }))
      ])
    ])
  ];
}

