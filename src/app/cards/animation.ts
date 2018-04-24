import { trigger, style, animate, transition, state } from '@angular/animations';
export const animationCard = [
  trigger('animationCard', [
    state('rotate0', style({ transform: 'rotateY(0deg)'})),
    state('wait', style({opacity: 1})),
    state('rotate90', style({'transform': 'rotateY(90deg)'})),
    state('leave', style({ 'transform': 'scale(10)',  'z-index': '3', 'opacity': '0'})),
    transition('rotate0 => rotate90', [ animate(500)]),
    transition('wait <=> rotate0', [ animate(490)]),
    transition('rotate90 => rotate0', [ animate('600ms 200ms ease-in')]),
    transition('* => leave', [ animate(500)]),
  ])
];
