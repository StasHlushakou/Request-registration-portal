import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to local storage', e);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(sessionStorage.getItem(key) ?? '');
    } catch (e) {
      console.error('Error getting data from local storage', e);
      return null;
    }
  }
}
