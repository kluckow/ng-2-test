import {Component, OnInit} from "@angular/core";
import {NavigationService} from "./navigation.service";
import {Post} from "./navigation.post";

@Component({
  selector: "navigation",
  templateUrl: "app/modules/common/navigation/navigation.html",
  providers: [NavigationService]
})

export class NavigationComponent implements OnInit{

  private links: Post[];

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.loadLinks();
  }

  private loadLinks() {
    this.navigationService.getLinks()
      .subscribe(links => this.links = links,
      error => {
        console.log(error);
      })
  }
}
