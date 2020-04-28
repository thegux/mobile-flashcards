import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import {AsyncStorage} from 'react-native'

const NOTIFICATION_KEY = 'flashcards:notification'

export function clearLocalNotifications(){
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
                .then(Notifications.cancelAllScheduledNotificationsAsync)
  
}

function createNotification(){
    return {
      title: 'Keep up with your quizes',
      body: "You still haven't answered any quiz today! 😥",
      ios: {
        sound: true
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: 'false',
        vibrate: true,
      }
    }
  }


export function setLocalNotification(){
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if(data === null){
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then((status) => {
              if(status === 'granted'){
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate())
                tomorrow.setHour(15)
                tomorrow.setMinute(0)
  
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
  
                  }
                )
  
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
  
              }
            })
        }
      })
  }
  