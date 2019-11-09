import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string = '';
  //posts:object[];
  @Input() numberOfLikes:number=0;

  @Output()
  change:EventEmitter<number> = new EventEmitter<number>();


  likeButtonClick(){
    this.numberOfLikes++;
    this.change.emit(this.numberOfLikes);
  }

  dislikeButtonClick(){
    this.numberOfLikes--;
    this.change.emit(this.numberOfLikes);
  }

  
 //constructor(){
 //this.posts=[{
   
 //}];
 //}
 //onSubmit(f){
  // let content = f.value.content;
  // let title = f.value.title;
  // this.posts.push({
  //   'title' : title,
  //   'content' : content
  // })

// }
 
  ngOnInit() {
  }

}






