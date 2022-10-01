var pattern = /[0-9]{8,10}/
var body = $response.body
var url = $request.url

if (body) {
	str = ''
  $done({ body: pattern.test(str) })
} else {
  $done({})
}
