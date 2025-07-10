import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: "portfolio-jxkob",
  private_key_id: "b7a22421f5665af898fe9e4f10e5180a5e6b722c",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAscnloDqquuUG\nHQrU6RefDvSBaxHhzAWU7MxoAZZoePhN7BOZDxB3nbBhQmttL7JW/sY0VM/EXpKM\nMZAMNaKh1rOIcGZY/4CaNSoh5OvPwuw+2MEdM0Z6NlPdH34OsZOCf0Sq6e8qkFzA\nh76AiSSDtmEBmeAQdWvpl+rOrluB46CGJex0F77KEAE4blUGXPyf4avIhy6g9npR\naOchXBfOcJ57q4Gdu43K903/2Ac02TEK3cEMrluZHFDVrLijPncLu16niO60Wksm\np5BvgUZ3SSCA0x8yvGhVvcfErFsqDidtStAn8C8zOc1Hrttt860LC5/MTmM6Zi90\nWhdLd+KTAgMBAAECggEABcpLdoNzwwwxQP3f0YycuzJWi/CdANh1G641gpoqaPXa\naQw2SiVtb/K3yWX9PWXI0AI0dkxM6/bD8SnogEo4tCOnKtGAOdD/p8j/yZuL4to8\nG01Yspk6VzmWGCRpamUEOWnvaDIpKVgqLImuFawWG7RMwodBq0aKZhWjDO/cHxFP\nHaeV9bIT5YgPzbRY5wm7G2bJzFidMe7Rv/ExYijjEW3XIOmj26bkq51rHTJdS8NJ\ndY0zYWqfabuqfGkiScy7ZmjyG4LkiGiyNd85NC0UqVWHUI1HnppAJOY/A+oZUHOZ\nvR30YcZGrenF61PzbPPwLTDgpPxoJ2sUd8Dpq/z9eQKBgQDlnKClHBgonDpD6HCP\nHJsRUQptJcTajV4b2O/1zfz5yqM3IQLUHgO+DYlqKt/8elROaMjd/iy7jHolVlIz\nBJzBEhq8MVkER7qRo5vIcPtS1MJ0lPxaHyhkkWXp5PklhYB4L3gXvaApGJ7hB29+\nm3jiUID43ufXZr2JFApCoBnrywKBgQDW1wWltbhgS3QLGyrkw1BCILFqgTf7X+M8\nU2e6W1TEGE0x2qgOvIyZHWSyDgAuOg9QhrkHKsr9o4jvcU++1tog/rD8W+2WGJdT\nDbvWUd2GVTFtXrd1KFejhlzX9tMKrDikjbgcRiPsIdoiqrsL2PicVFuxb4uaSsGV\nuC2jffObWQKBgEM+WImiLa0O+71RgE1ZKkyq+Cu46Oq8hfgP006gUdrxrlUB1Os8\nEwqAumKeRdSSGsiPxWvF+WG/pTH0EsSgMCwW2j+NEC3Bt/DZAlF0TRYX+w7bZwAZ\nqeGx9y/Ff/WuIE6SUFBbl2ERtc3fOJbSf1eADhVUan9Ztl5DwTF747t7AoGBAMgH\nfaeTMW7e8dWhXueN/n0DaYyrcU8oMS+qzGpTvPGzWrRvTIgj/5hUKLwrkvl3b2jf\ndwj4S/WqPMYLr18VNhUAbhMZGHXmwYY/xENBB8uaKKIXTSLVA/wqDum5UzedsENt\n/By/JZUm063xXqQiSR9s386t98IZlnJrAHs3uwhJAoGBAOMlzMo5BVrvhT4Vrvge\n5q41OgoiaI/RaKR6ye6g+0yKOcYX9y3OVXT8dM6tOOTucLrzoKVVGFoFDN1NTOWR\niPNIL7yqhKOhyj/TJmcZsyjIodbdgoee2xKT0jj5GO/qHRIPKi4PGaBmiBIKAC+A\nPJghaKHfikA3Qm7kdooOt2Np\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-fbsvc@portfolio-jxkob.iam.gserviceaccount.com",
  client_id: "105462750027219577619",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40portfolio-jxkob.iam.gserviceaccount.com",
};

const initApp = () => {
  if (import.meta.env.PROD) {
    console.info('PROD env detected. Using default service account.')
    // Use default config in firebase functions. Should be already injected in the server by Firebase.
    return initializeApp()
  }
  console.info('Loading service account from env.')
  return initializeApp({
    credential: cert(serviceAccount as ServiceAccount)
  })
}

export const app = activeApps.length === 0 ? initApp() : activeApps[0];