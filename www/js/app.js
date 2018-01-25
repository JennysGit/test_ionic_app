// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


angular.module('starter', ['ionic', 'angular.filter'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .controller('LoginController', function($scope, $state, $ionicModal, $ionicLoading, $timeout, $window, $interval) {

    console.log($window);
    $scope.toHelp = function() {
      $state.go('help');
    }

    const loginServerIp = 'ZOM';
    const loginServerPort = 'ZOM';

    $scope.showHelpSection = false;

    $scope.loginModel = {
      username: 'Jenny',
      password: '12445',
      serverIp: loginServerIp,
      serverPort: loginServerPort
    };

    $scope.download = function() {

    }

    $scope.doLogin = function() {
      // $scope.errorMessage = '用户名不能为空！';
      $ionicLoading.show();

      $timeout(function() {
        $ionicLoading.hide();
        $state.go('home.group');
      }, 1000)
      // $ionicLoading.show({
      //   template: 'Loading...',
      //   duration: 3000
      // }).then(function() {
      //   $state.go('home');
      //   console.log("The loading indicator is now displayed");
      // });
    }

    $scope.close = function() {
      alert("close");
    }

    console.log($scope.loginModel);

    $scope.openSettingServerModal = function($event) {
      $scope.modal.show($event);
      $event.stopPropagation();
    };

    $scope.closeSettingServerModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      if ($scope.modal) {
        $scope.modal.remove();
      }
    });

    $ionicModal.fromTemplateUrl('my-modal.html', {
      $scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.loginModel = $scope.loginModel;
      console.log($scope);
    });


    // $ionicModal.fromTemplateUrl('download-progress-modal.html', {
    //   $scope: $scope
    // }).then(function(downloadModal) {
    //   $scope.downloadModal = downloadModal;
    //   $scope.downloadModal.progressValue = 0;
    //   $scope.downloadModal.show();

    //   console.log($scope.downloadModal);

    //   var downLoadTimer = $interval(function() {
    //     $scope.downloadModal.progressValue += 5;
    //     if ($scope.downloadModal.progressValue >= 100) {
    //       $interval.cancel(downLoadTimer);
    //     }
    //   }, 100);
    // });

  })
  .controller('ResetPasswordController', function($scope, ) {})
  .controller('HomeContactController', function($scope, $filter, $ionicScrollDelegate) {
    $scope.hideNum = true;
    initStarContacts();
    initRecentContacts();
    initAllContacts();

    console.log("home contact reload.")

    function initStarContacts() {
      $scope.starContacts = [];
    }

    function initRecentContacts() {
      $scope.recentContacts = [];
    }

    function initAllContacts() {
      let startTime = Date.now();
      let allContacts = getAllContacts();
      let sidebarList = [];
      console.log("getAllContacts", Date.now() - startTime);

      allContacts.sort(sortCompare('fnpy'));

      console.log("sort contacts", Date.now() - startTime);

      for (let i = 0; i < allContacts.length; i++) {
        let contact = allContacts[i];
        let beginChar = contact.fnpy.charAt(0).toUpperCase();
        if (!/[a-zA-Z]/.test(beginChar)) {
          beginChar = '#';
        }
        contact.beginChar = beginChar;
        if (sidebarList.indexOf(beginChar) == -1) {
          sidebarList.push(beginChar);
        }
      }
      $scope.allContacts = allContacts;
      $scope.sidebarList = sidebarList;
      console.log("add begin char", Date.now() - startTime);
      //console.log($scope.allContacts);


      function sortCompare(property) {
        return function(obj1, obj2) {
          var a = obj1[property].toUpperCase();
          var b = obj2[property].toUpperCase();
          if (a > b) {
            return 1;
          } else if (a < b) {
            return -1
          }
          return 0;
        }
      }
    }

    function getAllContacts() {
      var contacts = [{
          uid: 1,
          display_name: 'jenny',
          fnpy: 'jenny',
          img_url: ''
        },
        {
          uid: 2,
          display_name: '张晶',
          fnpy: 'zhang jing',
          phone: "19900001041",
          rank: 0,
          img_url: ''
        },
        {
          uid: 3,
          display_name: '张成',
          fnpy: 'zhang cheng',
          phone: "19900001041",
          rank: 0,
          img_url: ''
        },
        {
          uid: 4,
          display_name: 'lily',
          rank: 0,
          fnpy: 'lily',
          phone: "19900001041",
          img_url: ''
        }
      ];

      for (var i = 0; i < 20; i++) {
        if (i % 5 == 0) {
          contacts.push({
            "display_name": "D" + i,
            "fnpy": 'd' + i,
            "img_url": null,
            "phone": "19900001041",
            "rank": 0,
            "state": 1,
            "ts": 2,
            "uid": 66580
          });
        } else if (i % 5 == 1) {
          contacts.push({
            "display_name": "A" + i,
            "fnpy": 'a' + i,
            "img_url": null,
            "phone": "19900001041",
            "rank": 0,
            "state": 1,
            "ts": 2,
            "uid": 66580
          });
        } else if (i % 5 == 2) {
          contacts.push({
            "display_name": "C" + i,
            "fnpy": 'c' + i,
            "img_url": null,
            "phone": "19900001041",
            "rank": 0,
            "state": 1,
            "ts": 2,
            "uid": 66580
          });
        } else if (i % 5 == 3) {
          contacts.push({
            "display_name": "L" + i,
            "fnpy": 'l' + i,
            "img_url": null,
            "phone": "19900001041",
            "rank": 0,
            "state": 1,
            "ts": 2,
            "uid": 66580
          });

        } else {
          contacts.push({
            "display_name": "X" + i,
            "fnpy": 'x' + i,
            "img_url": null,
            "phone": "19900001041",
            "rank": 0,
            "state": 1,
            "ts": 2,
            "uid": 66580,
            "starts": 'X'
          });
        }
      }

      return contacts
    }

  })
  .controller('HomeGroupController', function($scope) {

  })
  .controller('HomeFuncboxController', function($scope) {

  })
  .controller('SettingController', function($scope, $ionicModal) {
    //verison-modal.html

    $ionicModal.fromTemplateUrl('verison-modal.html', {
      $scope: $scope
    }).then(function(modal) {
      $scope.versionModal = modal;
      $scope.versionModal.upgradeVersion = true;
      //$scope.versionModal.show();
    });
  })
  .controller('ChatController', function($scope, $timeout, $state, $stateParams, $ionicHistory, $window) {

    $scope.callEnter = function() {
      $state.go('chat', { userId: 87878, chatType: 'user', usercall: 87878 }, { location: 'replace' });
    }



    if ($stateParams.usercall && parseInt($stateParams.usercall)) {
      $scope.usercall = parseInt($stateParams.usercall);
      $timeout(function() {
        // $ionicHistory.goBack(-2);
        $window.history.back();
      }, 3000);

    }
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: "/login",
        cache: true,
        controller: "LoginController",
        templateUrl: 'base/login/login.html'
      })
      .state('help', {
        url: '/help',
        cache: true,
        templateUrl: 'base/help/help.html'
      })
      .state('generalProblem', {
        url: '/generalProblem',
        cache: true,
        templateUrl: 'base/help/generalProblem.html'
      })
      .state('resetpwd', {
        url: '/resetpwd',
        cache: true,
        templateUrl: 'base/help/resetPassword.html',
        controller: 'ResetPasswordController'
      })
      .state('home', {
        url: '/home',
        cache: true,
        abstract: true,
        templateUrl: 'base/home/home.html'
      })
      .state('home.contact', {
        url: '/contact',
        cache: true,
        views: {
          'home-contact': {
            templateUrl: 'base/home/home.contact.html',
            controller: 'HomeContactController'
          }
        }
      })
      .state('home.group', {
        url: '/group',
        views: {
          'home-group': {
            templateUrl: 'base/home/home.group.html',
            controller: 'HomeGroupController'
          }
        }
      })
      .state('home.funcbox', {
        url: '/funcbox',
        views: {
          'home-funcbox': {
            templateUrl: 'base/home/home.function-box.html',
            controller: 'HomeFuncboxController'
          }
        }
      })
      .state('setting', {
        url: '/setting',
        cache: true,
        templateUrl: 'base/setting/setting.html',
        controller: 'SettingController'
      })
      .state('chat', {
        url: '/chat/:userId/:chatType/:usercall',
        templateUrl: 'base/chat/chat.html',
        controller: 'ChatController'
      })

    $urlRouterProvider.otherwise('/login');
  })
  .directive('alertErrorMessage', function() {
    return {
      restrict: 'E',
      template: `<div class="alert-error-message" ng-show="errorMessage">
                    <span>{{ errorMessage }}</span>
                </div>`,
      scope: {
        errorMessage: '='
      },
      link: function(scope, eles, attrs) {
        scope.$watch('errorMessage', function(val) {
          if (val) {
            window.setTimeout(function() {
              scope.$apply(function() {
                scope.errorMessage = '';
              })
            }, 1000);
          }
        })
      }
    }
  })
  .directive('downloadModal', function($ionicModal, $interval) {
    return {
      restrict: 'E',
      scope: {},
      template: `<script id="download-progress-modal.html" type="text/ng-template">
                  <div class="modal down-load-progress-modal">
                    <div class="down-load-progress-modal-content">
                      <!-- <div class="progress-bar"></div> -->
                      <p ng-bind="downloadModal">{{$scope}}</p>
                      
                      <p class="progress-message">正在下载中... {{ progressValue }}%</p>
                    </div>
                  </div>
                </script>`,
      link: function(scope, eles, attrs) {

        $ionicModal.fromTemplateUrl('download-progress-modal.html', {
          scope: scope
        }).then(function(downloadModal) {
          scope.downloadModal = downloadModal;
          // scope.downloadModal.show();
          scope.progressValue = 0;


          var downLoadTimer = $interval(function() {
            scope.progressValue += 5;
            if (scope.progressValue >= 100) {
              //scope.downloadModal.hide();
              $interval.cancel(downLoadTimer);
            }
          }, 100);
        });
      }
    }
  })
  .directive('contactSidebarIndex', function($window, $ionicScrollDelegate) {
    return {
      restrict: 'E',
      template: `<div class="side-bar contact-sidebar">
                    <ul ng-class="{'in-press': showCurrentNumber}">
                       <li ng-repeat="item in sidebarList" on-touch="touchStart($event,item);" on-release="touchEnd($event);" on-drag="touchMove($event, item);" id="{{item}}">
                        {{item}}
                      </li>
                    </ul>
                  </div>
                  <div class="current-show-number" ng-show="showCurrentNumber">
                    <h1>{{currentNumber}}</h1>
                  </div>
                  `,
      scope: {
        sidebarList: '='
      },
      link: function(scope, eles, attrs) {
        scope.showCurrentNumber = false;
        scope.currentNumber = "";
        var width = $window.innerWidth - 10;

        scope.goToIndex = function(item) {
          if (item === '*') {
            $ionicScrollDelegate.scrollTop();
          } else {
            var itemOffsetTop = document.getElementById("contactIndex" + item).parentNode.offsetTop;
            var scrollOffsetTop = $ionicScrollDelegate.getScrollPosition().top;
            $ionicScrollDelegate.scrollBy(0, itemOffsetTop - scrollOffsetTop);
          }
        };

        scope.touchStart = function($event, item) {
          $event.stopPropagation();
          scope.showCurrentNumber = true;
          scope.currentNumber = item;
          //$ionicScrollDelegate.freezeScroll(true);
          scroll(item);
        };
        scope.touchMove = function($event) {
          $event.stopPropagation();
          var elem = document.elementFromPoint(width, $event.gesture.center.pageY);
          var elemText = elem ? elem.innerText : '';
          if (elemText && elemText.length == 1 && scope.sidebarList.indexOf(elemText) > -1) {
            scope.currentNumber = elemText;
            scroll(elemText);
          }
        };
        scope.touchEnd = function($event) {
          $event.stopPropagation();
          scope.showCurrentNumber = false;
        };

        function scroll(item) {
          var instance = null;

          for (let i = 0; i < $ionicScrollDelegate["_instances"].length; i++) {
            var currentInstance = $ionicScrollDelegate["_instances"][i];
            if (currentInstance.$element[0].id == attrs.scrollId && currentInstance.$element[0].clientHeight > 0) {
              var instance = currentInstance;
              break;
            }
          }

          if (item === '*') {
            instance.scrollTop();
          } else {
            var itemOffsetTop = document.getElementById("contactIndex" + item).parentNode.offsetTop;
            var scrollOffsetTop = instance.getScrollPosition().top;
            instance.scrollBy(0, itemOffsetTop - scrollOffsetTop);
          }
        }
      }
    }
  })
  .directive('chatPttButton', function($window) {
    return {
      restrict: 'E',
      replace: true,
      scope: {

      },
      templateUrl: 'base/chat/chat.ptt-button.html',
      link: function(scope, elem, attrs) {
        elem.css('left', '5px').css('bottom', '50px');
        let movingPttButton = false;
        scope.isPttRecording = false;
        scope.pttReject = false;

        const dragElem = {
          width: 96,
          height: 96, // 元素的宽高
          bottomOffsetMin: 5,
          leftOfssetMin: 5,
          bottomOffsetMax: $window.innerHeight - 101,
          leftOfssetMax: $window.innerWidth - 101,
        };

        let elemCoords = {
          left: 5,
          bottom: 50
        }

        scope.touchStart = function($event) {
          console.log($event.gesture);

          if ($event.gesture.touches.length == 1) {
            // 发送ptt语音
            movingPttButton = false;
            scope.isPttRecording = true;
            scope.pttReject = 1;
          } else {
            // 移动ptt按钮
            movingPttButton = true;
          }
        }

        scope.touchMove = function($event) {
          if (movingPttButton) {
            let left = elemCoords.left + $event.gesture.deltaX;
            let bottom = elemCoords.bottom - $event.gesture.deltaY;

            if (left > dragElem.leftOfssetMin && left < dragElem.leftOfssetMax) {
              elem.css('left', left + 'px');
            }
            if (bottom > dragElem.bottomOffsetMin && bottom < dragElem.bottomOffsetMax) {
              elem.css('bottom', bottom + 'px');
            }
          }
        }

        scope.touchEnd = function($event) {
          console.log("touch end");
          scope.isPttRecording = false;
          scope.pttReject = 0;
        }
      }
    }
  })
  .filter('homeContactFilter', function() {
    return function(item, model) {
      console.log("homeContactFilter", item, model);
    }
  });
