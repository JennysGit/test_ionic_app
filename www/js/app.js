// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


angular.module('starter', ['ionic'])

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
        $state.go('home');
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
    $scope.allContacts = allContacts();
    $scope.orginAllContacts = angular.copy($scope.allContacts);
    $scope.starContacts = starContacts();
    $scope.recentContacts = recentContacts();
    $scope.sidebarList = nameStartArray($scope.orginAllContacts);

    $scope.goToIndex = function($event, item) {
      $event.preventDefault();
      $scope.currentIndex = item;
      $scope.hideNum = false;
      var offsetTop = document.getElementById('contactIndex' + item).parentNode.offsetTop;
      var scroll = $ionicScrollDelegate.getScrollPosition().top;
      $ionicScrollDelegate.scrollBy(0, offsetTop - scroll, true);
    }
    $scope.clearNum = function() {
      $scope.hideNum = true;
    };
    $scope.moveIndex = function($event, item) {
      console.log($event);
      //console.log(document.elementFromPoint($event.changedTouches[0].clientX, $event.changedTouches[0].clientY));
    }

    $scope.$watch('searchText', function(val) {
      if (val) {
        $scope.allContacts = $filter('homeContactFilter')($scope.orginAllContacts, val);
      } else {
        $scope.allContacts = angular.copy($scope.orginAllContacts);
      }
    });


    document.addEventListener('touchstart', '')

    function allContacts() {
      // private Long id;
      // private String nick_name;
      // private int province;
      // private int city;
      // private String location;
      // private String description;
      // private String img_small_url;
      // private String img_large_url;
      // private String img_hd_url;
      // private String email;
      // private String phone;
      // private String gender;
      var contacts = [{
        id: 12345,
        nick_name: 'Jenny',
        pinyin_name: 'Jenny',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: '张晶',
        pinyin_name: 'zhang jing',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: 'Zhang',
        pinyin_name: 'Zhang',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: 'Jingzhang',
        pinyin_name: 'Jingzhang',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: 'Jingzhang',
        pinyin_name: 'Jingzhang',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: '曹操',
        pinyin_name: 'cao cao',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: 'Jingzhang',
        pinyin_name: 'Jingzhang',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: '陈丽',
        pinyin_name: 'chen li',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: '王五',
        pinyin_name: 'wang wu',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: 'Google',
        pinyin_name: 'Google',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: 'Google',
        pinyin_name: 'Google',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: 'Google',
        pinyin_name: 'Google',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }, {
        id: 12345,
        nick_name: 'Google',
        pinyin_name: 'Google',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }];

      var formatedContacts = formatContacts(contacts);
      return formatedContacts;
    };

    function starContacts() {
      var starContacts = [{
        id: 12345,
        nick_name: 'Jenny',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }];
      return starContacts;
    };

    function recentContacts() {
      var recentContacts = [{
        id: 12345,
        nick_name: 'Jenny',
        province: 51,
        city: 1,
        location: '',
        description: '',
        img_small_url: '',
        img_large_url: '',
        img_hd_url: '',
        email: '1098739658@qq.com',
        phone: '18200375970',
        gender: '女'
      }];
      return recentContacts;
    }

    function nameStartArray(contacts) {
      var startArr = [];
      contacts.forEach(function(item) {
        startArr.push(item.start);
      });
      return startArr;
    };

    function formatContacts(contacts) {
      //var pinyinContacts = getPinYinContacts(contacts);
      var sortedContacts = contacts.sort(sortCompare('pinyin_name'));
      var formatContacts = [];

      for (var i = 0; i < sortedContacts.length; i++) {
        var curContact = sortedContacts[i];
        var firstChr = getFirstNumber(curContact.pinyin_name);
        if (hasContacts(formatContacts, firstChr)) {
          var len = formatContacts.length;
          formatContacts[len - 1].contacts.push(curContact);
        } else {
          formatContacts.push({
            start: firstChr,
            contacts: [curContact]
          });
        }
      }
      return formatContacts;
    }

    function hasContacts(contacts, chr) {
      var filtered = contacts.filter(function(contact) {
        var firstChr = getFirstNumber(contact.start);
        return firstChr === chr;
      });
      return filtered.length > 0;
    }

    function getFirstNumber(str) {
      return str.substr(0, 1).toUpperCase();
    }

    function sortCompare(property) {
      return function(obj1, obj2) {
        return obj1[property].toUpperCase() > obj2[property].toUpperCase();
      }
    }

    function getPinYinContacts(contacts) {
      contacts.forEach(function(contact) {
        contact.pinyin_name = pinyin(contact.nick_name, {
          style: pinyin.STYLE_NORMAL
        }).join(' ');
      });
      return contacts;
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
        templateUrl: 'base/home/home.html'
      })
      .state('home.contact', {
        url: '/contact',
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
      scope:{},
      template: `<script id="download-progress-modal.html" type="text/ng-template">
                  <div class="modal down-load-progress-modal">
                    <div class="down-load-progress-modal-content">
                      <!-- <div class="progress-bar"></div> -->
                      <p ng-bind="downloadModal">{{$scope}}</p>
                      
                      <p class="progress-message">正在下载中... {{ progressValue }}%</p>
                    </div>
                  </div>
                </script>`,
      link: function(scope,  eles, attrs) {

        $ionicModal.fromTemplateUrl('download-progress-modal.html', {
          scope: scope
        }).then(function(downloadModal) {
          scope.downloadModal = downloadModal;
          scope.downloadModal.show();
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
  });
