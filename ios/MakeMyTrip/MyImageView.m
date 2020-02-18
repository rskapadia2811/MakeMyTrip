//
//  MyImageView.m
//  MakeMyTrip
//
//  Created by iMac174 on 13/02/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "MyImageView.h"


@implementation MyImageView
RCT_EXPORT_MODULE(RNTText)

-(UIView *)view
{
  UIView *myView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 200, 200)];
  [myView setBackgroundColor:[UIColor redColor]];
  UIView *viewSub = [[UIView alloc] initWithFrame:CGRectMake(20, 20, 50, 50)];
[viewSub setBackgroundColor:[UIColor greenColor]];
  UITextView *myText = [[UITextView alloc] initWithFrame:CGRectMake(0, 0, 50, 50)];
  myText.text = @"rishi";
[viewSub addSubview:myText];
  [myView addSubview:viewSub];
  return myView;
}
@end
