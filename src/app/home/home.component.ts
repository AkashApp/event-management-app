import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  upcomingEvents: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    this.user = storedUser ? JSON.parse(storedUser) : null;

    this.eventService.getEvents().subscribe(events => {
      const today = new Date();
      this.upcomingEvents = events
        .filter(e => new Date(e.date) >= today)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 5);
    });
  }
}
