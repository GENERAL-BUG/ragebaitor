import { ToastMessage } from '../types';

export const PASSIVE_AGGRESSIVE_TOASTS: Omit<ToastMessage, 'id' | 'timestamp'>[] = [
  {
    title: 'NOTICE',
    message: 'Verification required.',
    type: 'info'
  },
  {
    title: 'LOG',
    message: 'Your response has been retained.',
    type: 'judgment'
  },
  {
    title: 'STATUS',
    message: 'Attempt recorded.',
    type: 'warning'
  },
  {
    title: 'NOTICE',
    message: 'Not this time.',
    type: 'alert'
  },
  {
    title: 'LOG',
    message: 'Your previous selection has been retained.',
    type: 'info'
  },
  {
    title: 'STATUS',
    message: 'That action was unsuccessful.',
    type: 'warning'
  },
  {
    title: 'NOTICE',
    message: 'You have repeated this action.',
    type: 'judgment'
  },
  {
    title: 'LOG',
    message: 'Assessment incomplete.',
    type: 'alert'
  }
];

export const DISMISSAL_RETALIATION_TOASTS: Omit<ToastMessage, 'id' | 'timestamp'>[] = [
  {
    title: 'LOG',
    message: 'Dismissal recorded.',
    type: 'judgment'
  },
  {
    title: 'STATUS',
    message: 'Your action was noted.',
    type: 'info'
  },
  {
    title: 'NOTICE',
    message: 'Continue.',
    type: 'warning'
  }
];
