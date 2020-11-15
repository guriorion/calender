var firebaseConfig = {
    apiKey: "AIzaSyBi9QF7qZPxXxs1DbnAoXc9btRqGMIUgQw",
    //authDomain: "web-push-db0da.firebaseapp.com",
    //: "https://project-id.firebaseio.com",
    //projectId: "web-push-db0da",
    //storageBucket: "project-id.appspot.com",
    messagingSenderId: "870155324419",
    //appID: "1:870155324419:web:0e251e0b7334b513201236",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)


  // Add the public key generated from the console here.
//messaging.usePublicVapidKey("BB79r4w21co5Fy-LcBst2jwADDl7z5fEa6uw31aSfQzMmM_FQRRu1-GrGwxgYrcrjMIbGnWVk3L9eWMCjJ-VuqY");
  console.log(firebase)

  const messaging = firebase.messaging();
  console.log(messaging)
  messaging.requestPermission()
  .then(function(){
    console.log('Have permission');
    return messaging.getToken();
  })
  .then(function(token){
  console.log(token);
  })

  .catch(function(err){
    console.log(err)
    console.log('Error Occured');
  })

  messaging.onMessage(function(payload){
    console.log('onMessage:')
  });

/*
exports.sendReminder = functions.region('asia-northeast1')
  .runWith({ memory: '512MB' })
  .pubsub.schedule('every 1 minutes')
  .timeZone('Asia/Tokyo')
  .onRun(async (context) => {
    // 秒を切り捨てた現在時刻
    const now = (() => {
      let s = admin.firestore.Timestamp.now().seconds
      s = s - s % 60
      return new admin.firestore.Timestamp(s, 0)
    })()
    // リマインダーコレクションから現在時刻のリマインダーをクエリ
    const remindersRef = await admin.firestore().collection('reminders')
      .where('remindAt', '==', now)
      .get()

    const notCompletedReminderTasks = remindersRef.docs
      .map((doc) => doc.data())
      .filter((task) => !task.isDone) // 完了していないタスクにフィルタする

    const reminders = await prepareReminders(notCompletedReminderTasks)
    // リマインダーが1件以上あったら、FCMのPUSH通知を実行
    if (reminders.length !== 0) {
      await sendPushNotificationsForReminder(reminders)
    }
    return 'リマインダー通知処理終了'
  })

async function sendPushNotificationsForReminder(reminders) {
  const messages = []
  for (const reminder of reminders) {
    // ユーザーのトークンは複数ある可能性があるので、ユーザーのトークン分メッセージを作る
    const msgs = reminder.tokens.map((token) => {
      const notification = {
        title: "リマインダー",
        body: reminder.task.content
      }
      const message = {
        token: token,
        notification: notification
      }
      return message
    })
    Array.prototype.push.apply(messages, msgs)
  }
  if (messages.length === 0) { return }
  await sendAll(messages)
}

async function sendAll(messages) {
  // 500件ずつに分割する(500件以上は、sendAllメソッド側でエラーになるため)
  const msgs = messages.reduce((acc, val) => {
    const MAX_BATCH_SIZE = 500
    const last = acc[acc.length - 1]
    if (last.length === MAX_BATCH_SIZE) {
      acc.push([val])
      return acc
    }
    last.push(val)
    return acc
  }, [[]])

  // Promise.allで分割して配信
  const promises = msgs
    .map((ms) => admin.messaging()
      .sendAll(ms)
      .then((batchResponse) => {
        batchResponse.responses.forEach((res) => {
          // FCM側でエラーが発生した場合、StackDriverにログを残す
          if (res.error) {
            console.error(res.error)
          }
        })
        console.log(`send messages: ${ms.length} count`)
      })
      .catch((e) => {
        console.error(e)
      })
    )
  await Promise.all(promises)
}

*/
