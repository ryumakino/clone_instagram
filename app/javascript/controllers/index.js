// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import FlashNotificationsController from "./flash_notifications_controller"
application.register("flash-notifications", FlashNotificationsController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import LikeDislikeController from "./like_dislike_controller"
application.register("like-dislike", LikeDislikeController)

import ModalController from "./modal_controller"
application.register("modal", ModalController)
