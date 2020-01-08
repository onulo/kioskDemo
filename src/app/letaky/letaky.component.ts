import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-letaky',
  templateUrl: './letaky.component.html',
  styleUrls: ['./letaky.component.css']
})
export class LetakyComponent implements OnInit {

  ktoryletak: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ktoryletak = params.get('id');
    });
  }

}
