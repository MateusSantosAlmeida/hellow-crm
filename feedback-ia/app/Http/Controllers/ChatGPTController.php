<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class ChatGPTController extends Controller
{
    public function sendMessage(Request $request)
    {
        $question = $this->prepareQuestion($request->all());

        $client = new Client();

        $response = $client->request('POST', 'https://api.openai.com/v1/chat/completions', [
            'headers' => [
                'Authorization' => 'Bearer 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',
                'Content-Type' => 'application/json',
            ],
            'json' => [
                'model' => 'gpt-3.5-turbo-1106',
                'messages' => [
                    ['role' => 'system', 'content' => 'You are'],
                    ['role' => 'user', 'content' => $question],
                ],
            ],
        ]);
        
        return response()->json(json_decode((string) $response->getBody(), true));
    }

    private function prepareQuestion($data)
    {
        // Valores totais
        $totalInvoiceResult = $data['invoiceResult']['total'] ?? 0;
        $totalQuoteResult = $data['quoteResult']['total'] ?? 0;
        $totalOfferResult = $data['offerResult']['total'] ?? 0;
        $totalPaymentResult = $data['paymentResult']['total'] ?? 0;

        // Contagens totais
        $countPaymentResult = $data['paymentResult']['count'] ?? 0;
        $countInvoiceResult = array_sum(array_column($data['invoiceResult']['performance'], 'count')) ?? 0;
        $countQuoteResult = array_sum(array_column($data['quoteResult']['performance'], 'count')) ?? 0;
        $countOfferResult = array_sum(array_column($data['offerResult']['performance'], 'count')) ?? 0;

        $statusesQuote = array_column($data['quoteResult']['performance'], 'status');
        $percentagesQuote = array_column($data['quoteResult']['performance'], 'percentage');
        $percentagesQuoteResult = array_combine($statusesQuote, $percentagesQuote);

        $statusesOffer = array_column($data['offerResult']['performance'], 'status');
        $percentagesOffer = array_column($data['offerResult']['performance'], 'percentage');
        $percentagesOfferResult = array_combine($statusesOffer, $percentagesOffer);

        $statusesInvoice = array_column($data['invoiceResult']['performance'], 'status');
        $percentagesInvoice = array_column($data['invoiceResult']['performance'], 'percentage');
        $percentagesInvoiceResult = array_combine($statusesInvoice, $percentagesInvoice);

        $question = "Preciso que você seja um especialista em gestão empresarial e marketing
        Eu preciso de uma recomendação personalizada pois eu tenho uma empresa. 

        Nesse mês eu fiz $countQuoteResult cotações totalizando $totalQuoteResult, onde desses $countQuoteResult " .
        $percentagesQuoteResult['draft']."% são rascunho ".
        $percentagesQuoteResult['pending']."% estão pendentes ".
        $percentagesQuoteResult['sent']."% foram enviados ".
        $percentagesQuoteResult['expired']."% expiraram ".
        $percentagesQuoteResult['declined']."% foram recusadas ".
        $percentagesQuoteResult['accepted']."% foram aceitas ".
        
        ".\nTambém fiz $countOfferResult ofertas totalizando $totalOfferResult, onde desses $countOfferResult " .
        $percentagesOfferResult['draft']."% são rascunho ".
        $percentagesOfferResult['pending']."% estão pendentes ".
        $percentagesOfferResult['sent']."% foram enviados ".
        $percentagesOfferResult['expired']."% expiraram ".
        $percentagesOfferResult['declined']."% foram recusadas ".
        $percentagesOfferResult['accepted']."% foram aceitas ".

        
        ".\n Também emiti $countInvoiceResult faturas totalizando $totalInvoiceResult, onde dessas $countOfferResult " .
        $percentagesInvoiceResult['draft']."% são rascunho ".
        $percentagesInvoiceResult['pending']."% estão pendentes ".
        $percentagesInvoiceResult['paid']."% foram pagos ".
        $percentagesInvoiceResult['unpaid']."% não foram pagos ".
        $percentagesInvoiceResult['partially']."% foram pagos parcialmente ".

        ".\n Também obtive $countPaymentResult pagamentos totalizando $totalPaymentResult";

        return $question;
    }
}
